export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      page: {
        Row: {
          checksum: string | null
          id: number
          last_refresh: string | null
          meta: Json | null
          parent_page_id: number | null
          path: string
          source: string | null
          type: string | null
          version: string | null
        }
        Insert: {
          checksum?: string | null
          id?: number
          last_refresh?: string | null
          meta?: Json | null
          parent_page_id?: number | null
          path: string
          source?: string | null
          type?: string | null
          version?: string | null
        }
        Update: {
          checksum?: string | null
          id?: number
          last_refresh?: string | null
          meta?: Json | null
          parent_page_id?: number | null
          path?: string
          source?: string | null
          type?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "page_parent_page_id_fkey"
            columns: ["parent_page_id"]
            referencedRelation: "page"
            referencedColumns: ["id"]
          }
        ]
      }
      page_section: {
        Row: {
          content: string | null
          embedding: string | null
          heading: string | null
          id: number
          page_id: number
          slug: string | null
          token_count: number | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id: number
          slug?: string | null
          token_count?: number | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id?: number
          slug?: string | null
          token_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "page_section_page_id_fkey"
            columns: ["page_id"]
            referencedRelation: "page"
            referencedColumns: ["id"]
          }
        ]
      }
      queries: {
        Row: {
          created_at: string
          id: number
          query_string: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          query_string?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          query_string?: string | null
          type?: string | null
        }
        Relationships: []
      }
      story: {
        Row: {
          created_at: string
          id: number
          name: string | null
          storybook_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          storybook_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          storybook_id?: string | null
        }
        Relationships: []
      }
      story_render: {
        Row: {
          actual_duration: number | null
          base_duration: number | null
          commit_sha: string | null
          core_version_number: string | null
          id: number
          phase: string | null
          run_at: string
          story_id: number | null
        }
        Insert: {
          actual_duration?: number | null
          base_duration?: number | null
          commit_sha?: string | null
          core_version_number?: string | null
          id?: number
          phase?: string | null
          run_at?: string
          story_id?: number | null
        }
        Update: {
          actual_duration?: number | null
          base_duration?: number | null
          commit_sha?: string | null
          core_version_number?: string | null
          id?: number
          phase?: string | null
          run_at?: string
          story_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "story_render_story_id_fkey"
            columns: ["story_id"]
            referencedRelation: "story"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_page_parents: {
        Args: {
          page_id: number
        }
        Returns: {
          id: number
          parent_page_id: number
          path: string
          meta: Json
        }[]
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_discussions: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          path: string
          content: string
          similarity: number
          source: string
          type: string
          meta: Json
          heading: string
          slug: string
        }[]
      }
      match_page_sections: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          id: number
          page_id: number
          slug: string
          heading: string
          content: string
          similarity: number
        }[]
      }
      match_page_sections_for_ai: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          path: string
          content: string
          similarity: number
        }[]
      }
      match_page_sections_v3: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          path: string
          content: string
          similarity: number
          source: string
          type: string
          meta: Json
          heading: string
          slug: string
        }[]
      }
      match_weekly_search_usage: {
        Args: Record<PropertyKey, never>
        Returns: {
          query_string: string
          count: number
        }[]
      }
      upsert_story_and_create_story_render: {
        Args: {
          _storybook_id: string
          _story_name: string
          _actual_duration: number
          _base_duration: number
          _commit_sha: string
          _core_version: string
          _phase: string
        }
        Returns: undefined
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

