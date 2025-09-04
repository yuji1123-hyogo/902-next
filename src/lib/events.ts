// 疑似データストレージ

import { Event } from "@/types/event";

// 実際のプロジェクトではデータベースを使用
let events: Event[] = [
  {
    id: "1",
    title: "プロジェクトミーティング",
    date: "2024-03-15",
    time: "14:00",
    description: "月次進捗会議",
  },
  {
    id: "2",
    title: "デザインレビュー",
    date: "2024-03-20",
    time: "10:30",
  },
];

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function getEventById(id: string): Promise<Event | undefined> {
  return events.find((event) => event.id === id);
}

export async function createEvent(
  eventData: Omit<Event, "id">
): Promise<Event> {
  const newEvent: Event = {
    ...eventData,
    id: Date.now().toString(),
  };
  events.push(newEvent);
  return newEvent;
}

export async function updateEvent(
  id: string,
  eventData: Partial<Event>
): Promise<Event | null> {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return null;

  events[index] = { ...events[index], ...eventData };
  return events[index];
}

export async function deleteEvent(id: string): Promise<boolean> {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return false;

  events.splice(index, 1);
  return true;
}
