export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: number
          created_at: string
          name: string
          description: string
          image: string
          address: string
        }
        Insert: {
          id?: number
          created_at?: string
          name?: string
          description?: string
          image?: string
          address?: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          description?: string
          image?: string
          address?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
