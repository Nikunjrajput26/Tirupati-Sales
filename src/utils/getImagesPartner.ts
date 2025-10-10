// utils/getImages.ts
export const logos: string[] = Object.values(
  import.meta.glob<string>(
    "@/assets/LOGOWithName/*.{png,jpg,jpeg,svg}",
    { eager: true, import: "default" }
  )
);
 