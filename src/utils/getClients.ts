// utils/getClients.ts
export interface Client {
  src: string;
  name: string;
  feedback: string;
}

export const clients: Client[] = Object.values(
  import.meta.glob<string>(
    "@/assets/HappyClients/*.{png,jpg,jpeg,svg}",
    { eager: true, import: "default" }
  )
).map((src, i) => ({
  src,
  name: `Client ${i + 1}`, // replace with real names if you want
  feedback: "Loved the service!" // or pull real text
}));
