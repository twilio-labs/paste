export const defaultExample = `
const DefaultPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  return (
    <Pagination label="default pagination navigation">
      <PaginationItems>
        <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
        <PaginationLabel>
          Page {currentPage}
        </PaginationLabel>
        <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 5} />
      </PaginationItems>
    </Pagination>
  );
};

render(
  <DefaultPagination />
)
`.trim();

export const numberExample = `
const NumberPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4, 5];
  const totalPages = pages.length;

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  const goToPage = (event) => {
    setCurrentPage(parseInt(event.target.innerText));
    event.preventDefault();
  };

  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>Date</Th>
            <Th textAlign="right">Message count</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Oct 21, 2020</Td>
            <Td textAlign="right">3</Td>
          </Tr>
          <Tr>
            <Td>Oct 20, 2020</Td>
            <Td textAlign="right">6</Td>
          </Tr>
          <Tr>
            <Td>Oct 19, 2020</Td>
            <Td textAlign="right">13</Td>
          </Tr>
          <Tr>
            <Td>Oct 18, 2020</Td>
            <Td textAlign="right">9</Td>
          </Tr>
        </TBody>
      </Table>
      <Box display="flex" justifyContent="center" marginTop="space70">
        <Pagination label="numbered pagination navigation">
          <PaginationItems>
            <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
            <PaginationNumbers>
              {pages.map((page, index) => {
                const goToPageString = 'Go to page ';
                return (
                  <PaginationNumber label={goToPageString + page} isCurrent={page === currentPage} onClick={goToPage} key={index}>
                    {page}
                  </PaginationNumber>
                );
              })}
            </PaginationNumbers>
            <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 5}/>
          </PaginationItems>
        </Pagination>
      </Box>
    </>
  );
};

render(
  <NumberPagination />
)
`.trim();

export const positioningExample = `
const PositioningPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4];
  const totalPages = pages.length;
  const results = ['1–5 of 20 results', '5-10 of 20 results', '10-15 of 20 results', '15-20 of 20 results'];

  const goToNextPage = (event) => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  const goToPage = (event) => {
    setCurrentPage(parseInt(event.target.innerText));
    event.preventDefault();
  };

  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>Date</Th>
            <Th>SID</Th>
            <Th>From</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMl29llgoihx286uhxfb0yc5n0sg391x5n
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMxarke3v30fv17hauqn86a7nhgm3b5d87
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="p">16:24:28 PDT</Text>
              <Text as="p">2020-09-17</Text>
            </Td>
            <Td>
              <Text as="span" fontFamily="fontFamilyCode">
                SMl29llgoihx286uhxfb0yc5n0sg391x5n
              </Text>
            </Td>
            <Td>(602) 609-6747</Td>
          </Tr>
        </TBody>
      </Table>
      <Box display="flex" justifyContent="center" marginTop="space70">
        <Pagination label="paged pagination navigation">
          <PaginationItems>
            <PaginationArrow label="Go to previous page" variant="back" onClick={goToPreviousPage} disabled={currentPage === 1} />
            <PaginationNumbers pageLabel={results[currentPage - 1]}>
              {pages.map((page, index) => {
                const goToPageString = 'Go to page ';
                return (
                  <PaginationNumber label={goToPageString + page} isCurrent={page === currentPage} onClick={goToPage} key={index}>
                    {page}
                  </PaginationNumber>
                );
              })}
            </PaginationNumbers>
            <PaginationArrow label="Go to next page" variant="forward" onClick={goToNextPage} disabled={currentPage === 4} />
          </PaginationItems>
        </Pagination>
      </Box>
    </>
  );
};

render(
  <PositioningPagination />
)
`.trim();
