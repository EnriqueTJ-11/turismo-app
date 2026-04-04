import type { Metadata } from "next";
import PlansTemplate from "@/components/features/planes/templates/PlansTemplate";

const title = "Amaturis | Planes turísticos y aventuras en Caquetá";
const description =
  "Explora nuestra colección de planes en Caquetá: senderismo, rafting, cascadas y cultura local, con filtros por precio, duración y dificultad para elegir tu aventura ideal.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUPQ4FTaudHjVh2_9d1HiiK6eusfERSGpn7oMsCDbheNkDXeULpV_DGhVDdxWUNxKgonnPyeG8qVo7oKw3hRBPw3k_52kxUodBxifXEGMG90eIyZKkSYsfMLUxGQuAaG5BVWb7JeoFPSvcmBEztctvkJ7FcAg6W1JJjBIt7WfRoKtK5NTMAnUZFp_BVpmYpIYpXwNupbuk7nEDq9qOle24pHekLpTzVV5leM91Dj8xb9na0eDXQOwyru2GZYJcQfAXkOqNIkyQy2o";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Cobertura amazónica en Caquetá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function PlanesPage() {
  return <PlansTemplate />;
}
