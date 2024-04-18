export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          bookedNights: number | null
          bookingStatus: string | null
          created_at: string
          endDate: string | null
          extraCharges: number | null
          guestID: number | null
          hasBreakfast: boolean | null
          id: number
          numGuest: number | null
          observations: string | null
          paymentStatus: boolean | null
          roomID: number | null
          roomPrice: number | null
          startDate: string | null
          totalPrice: number | null
        }
        Insert: {
          bookedNights?: number | null
          bookingStatus?: string | null
          created_at?: string
          endDate?: string | null
          extraCharges?: number | null
          guestID?: number | null
          hasBreakfast?: boolean | null
          id?: number
          numGuest?: number | null
          observations?: string | null
          paymentStatus?: boolean | null
          roomID?: number | null
          roomPrice?: number | null
          startDate?: string | null
          totalPrice?: number | null
        }
        Update: {
          bookedNights?: number | null
          bookingStatus?: string | null
          created_at?: string
          endDate?: string | null
          extraCharges?: number | null
          guestID?: number | null
          hasBreakfast?: boolean | null
          id?: number
          numGuest?: number | null
          observations?: string | null
          paymentStatus?: boolean | null
          roomID?: number | null
          roomPrice?: number | null
          startDate?: string | null
          totalPrice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_bookings_guestID_fkey"
            columns: ["guestID"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_bookings_roomID_fkey"
            columns: ["roomID"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      guests: {
        Row: {
          countryFlag: string | null
          created_at: string
          email: string | null
          fullName: string | null
          id: number
          nation: string | null
          nationID: string | null
        }
        Insert: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nation?: string | null
          nationID?: string | null
        }
        Update: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nation?: string | null
          nationID?: string | null
        }
        Relationships: []
      }
      rooms: {
        Row: {
          created_at: string
          description: string | null
          discount: number | null
          id: number
          image: string | null
          maxGuestsPerRoom: number | null
          name: string | null
          regularPrice: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxGuestsPerRoom?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxGuestsPerRoom?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          breakfastPrice: number | null
          created_at: string
          id: number
          maxBookingDays: number | null
          maxGuestsPerBooking: number | null
          minBookingDays: number | null
        }
        Insert: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxBookingDays?: number | null
          maxGuestsPerBooking?: number | null
          minBookingDays?: number | null
        }
        Update: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxBookingDays?: number | null
          maxGuestsPerBooking?: number | null
          minBookingDays?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
