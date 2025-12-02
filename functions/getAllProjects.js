import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
  try {
    const getAllProjectQuery = gql`
      {
        projects {
          id
          title
          description
          image {
            url
          }
          source
          tags
        }
      }
    `;

    const { projects } = await graphcms.request(getAllProjectQuery);
    return projects;
  } catch (error) {
    // GERÇEKÇİ MOCK DATA
    return [
      {
        id: "1",
        title: "Twitter-Clone",
        description:
          "Bu projede sosyal medya deneyimini sıfırdan inşa ettim! Kullanıcılar: belirttiğim işlemleri yapabilecekler.Google ile giriş yapabilir, Tweet atabilir vs.. Diğer kullanıcıların tweet’lerini beğenebilir",
        image: {
          url: "/images/twiter.png",
        },
        source: "https://github.com/nevaldurmaz/TWITER-CLONE",
        tags: [
          "Firebase (Authentication, Firestore, Storage)",
          "React",
          "React Router v6",
          "React Toastify",
          "Tailwind CSS",
        ],
      },
      {
        id: "2",
        title: "Admin-Dashboard",
        description:
          "Modern ve kullanıcı dostu bir e-ticaret yönetim paneli. Mağaza sahiplerinin ürün, sipariş ve müşteri yönetimini kolaylaştırmak için geliştirilmiştir.",
        image: {
          url: "/images/admin.png",
        },
        source: "https://github.com/nevaldurmaz/NEXTJS-ADM-N-DASHBOARD",
        tags: [
          "React",
          "TypeScript",
          "Tailwind Css",
          "Json Server",
          "Chart.js & React-Chart.js",
          "Next.js",
        ],
      },
      {
        id: "3",
        title: "Socket-Chat App",
        description:
          "Modern, responsive ve gerçek zamanlı mesajlaşma uygulaması. Kullanıcıların özel odalar oluşturup anlık olarak mesajlaşabilmesini sağlar.",
        image: {
          url: "/images/socket.png",
        },
        source: "https://github.com/nevaldurmaz/SOCKET-CHAT",
        tags: [
          "React",
          "React Hooks",
          "Tailwind Css",
          "Socket.io-client",
          "Node.js",
        ],
      },
      {
        id: "4",
        title: "Car Rental",
        description:
          "Bu proje, Next.js ve MongoDB kullanılarak geliştirilmiş bir araç kiralama uygulamasıdır. Stripe ödeme entegrasyonu sayesinde kullanıcılar gerçek bir kiralama/ödeme akışını deneyimleyebilir.",
        image: {
          url: "/images/car.png",
        },
        source: "https://github.com/nevaldurmaz/NEXTJS-CAR-RENTAL",
        tags: [
          "React",
          "Tailwind Css",
          "TypeScript",
          "Next.js",
          "API Routes",
          "MongoDB",
          "Mongoose",
        ],
      },
    ];
  }
};
