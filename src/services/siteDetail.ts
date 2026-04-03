import { SiteDetailSchema } from "@/schemas/siteDetail";
import { type SiteDetail } from "@/types/siteDetail";

const mockSiteDetail: SiteDetail = {
  id: "site-detail-1",
  name: "Cascada Fin del Mundo",
  type: "Cascada",
  location: "Mocoa, Putumayo - Frontera con Caquetá",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuACIPCeuaxb96R-SaywaQUN_XcMFMUXM6NRMH8C0_MIoTvgdbx6cajPu0Pns7DkGzf3l23-ZCWs_dnOJrOSwnulwtShpSnolzUN3rTeqennEgUShJkEzYXRbHZ0a_BxbZ6ph31B12OJm5sYafBAONYMqSlyzV0nqfwxSx4Ov4IA0Vqvwv60YqAlXeRdvd6YT99i-kEsRK34To1I-bYFSESkXLare6F8LE3mX2CsxN4I-lU7iL5dZx2qmnbOyyOX0Ox7HbgrruIdJh6r",
  capacityPerDay: "40 personas/día",
  description: [
    "La Cascada Fin del Mundo es un tesoro oculto entre la selva amazónica y las montañas de los Andes. Se trata de una caída de agua de 75 metros de altura que parece desprenderse hacia el vacío absoluto desde una plataforma rocosa natural.",
    "El sendero para llegar atraviesa ecosistemas de bosque andino y selva húmeda tropical, donde se pueden observar aves exóticas, mariposas multicolores y pozas de agua cristalina color esmeralda perfectas para un baño revitalizante antes de llegar al gran salto.",
  ],
  galleryImages: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBY1klAlCQOfuHA6CgrxkjVs4iCIGAy7zEuyyS35TzmjF_Qup91FVQ40oGDTFlfxdtCKF6ZG8h16Oro9Y1LfiYjo_6NjXHq_jhN-YtHybBlbAbyem2SZy7bB5YwQQZtmZCubOHd3swZ-pH9QKhIlw1cVYXxma7RN0r8Q3UAo1lGGZBo_vdg0So25bp5rFm58hqCwTy89xdH0jJ9Ea4kb_FjZMZJrvZit2yyyjvzThSgkm_oft16TIAv1BAs2WH-xLJe86TeBkph6SpP",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFDinc0A5m_oMvQ98qVWB34Y3e6rQFrDvvGlW3Q1eq3IAGO5o-bxlaOFn6wYel3gEnW9v-xjxQYN4pWiivZzKzl750Z4gzqfeIzn4FZtdpNa2-1kSJFE3MXBsT4cjEgNLbSxhL332PPzd7b_PmzH7_vHERdYeyJDr-IaG-Jhub4lXb5-zIp7yzLXYOuGkYGYWmlgRylu1KfJGperESGWxLW3y6HFQojbRe_GQumlLsiXSDsyNbB-ZZdK3_3QXJttytDR_EAItvYioO",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pp_mJD2-i2cGdAHqmvUqI6zqDi89kDpqs7kDY9QD0DRD3nL7cJeql5NkQeGO-T9iXn12X11Zv3Sto5Sv6HHS_tauTvJTSubBGU-KFni2WdtfjLjF_9kWp1LmTOHxr1JKtNu9Ybavjw_Ss35TqOtR2zrSdARFhKHVI5DuzyQg5ltywnXULc-_aUD5e_JM_e7eNOsS_dw150EjxfSW2inglRAT3AvLvkljX0RRQcG7rk2p9KSI1_gtwkGRPqv8Jmq-RldmGdTzcG6r",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pFTIV22N2LdjPg2yQVzOxx6zeppSSpOH3OJ8Ou0UbjJpmw5GCvB4zanYOS4RVYxoQOXMVvWwZK1dsAUjBnIErMf4N5bQU_804vA3NP8cJHtsEaS_xySDNIrFpcz8VY0xWBuEejnD8fJ5J75UsREHlMdIPE7Jvlhkg7Fuw2uh-8Y3HUnQHRbUW--yIsASzsj8RR3qC1Celumer_ttPCSe72pmxr63P26dN9Ljp1LCwQ4tKnbZnynUuv684v3Azr7klT3FvBnzO0-K",
  ],
  videoCover:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9djbj_yIrFOfLLaLfmLW76_Z4hE5lLE0S0BTy0Lu5VkNnLpAMaLXrjITqMyvSlwMAjSFdaU2vRdvHKN1vdUPEjM5KqS--LVvIPiJGkt0GNQyreeFnU85o9XP3yYVO0RJHDTO7laLVOZBR9XZvHwMl008TbbmA4rPT2mlEs-cb0vWjBni8-tHdRYOffK8j6On6hESmzYiadk7qzCZrFwlB7N8cq2CTLi5cWgrNTcuwva4wfuvoKpuA0XAZQCqrmrqeUPPWb0FecDeK",
  mapLat: 1.1472,
  mapLng: -76.6481,
};

export const getSiteDetail = async (): Promise<SiteDetail> => {
  return SiteDetailSchema.parse(mockSiteDetail);
};
