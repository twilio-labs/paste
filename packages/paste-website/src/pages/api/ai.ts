import {fileURLToPath} from 'url';
import path from 'path';

import {loadQAStuffChain} from 'langchain/chains';
import {OpenAIEmbeddings} from 'langchain/embeddings/openai';
import {ChatOpenAI} from 'langchain/chat_models/openai';
import {FaissStore} from 'langchain/vectorstores/faiss';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {question} = req.body;
  if (!question) {
    res.status(200).send({answer: 'Please provide a question'});
    return;
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // The directory of data saved from Python
  const directory = path.join(__dirname, '../../../indexes/faiss_index');

  // Load the vector store from the directory
  const loadedVectorStore = await FaissStore.loadFromPython(directory, new OpenAIEmbeddings());

  const model = new ChatOpenAI({
    temperature: 0,
    modelName: 'gpt-4',
  });
  const stuffChain = loadQAStuffChain(model);

  try {
    // Search for the most similar document
    const inputDocuments = await loadedVectorStore.similaritySearch(question, 4);

    const answer = await stuffChain.call({
      // eslint-disable-next-line camelcase
      input_documents: inputDocuments,
      question,
    });

    console.log(answer);
    res.status(200).send({answer});
  } catch (error) {
    res.status(500).send({error});
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // TODO: Decrease this limit
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 12,
};
