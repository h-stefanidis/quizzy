/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import type { RoomCreatedAt } from './roomCreatedAt';
import type { RoomEndedAt } from './roomEndedAt';
import type { RoomId } from './roomId';
import type { RoomUpdatedAt } from './roomUpdatedAt';

export interface Room {
  created_at?: RoomCreatedAt;
  ended_at?: RoomEndedAt;
  id: RoomId;
  is_published: boolean;
  is_randomized: boolean;
  name: string;
  quiz_id?: number;
  updated_at?: RoomUpdatedAt;
}