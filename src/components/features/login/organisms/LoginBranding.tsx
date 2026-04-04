import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import Link from "next/link";

const avatarImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdRRiMs45tZgR6z0p8cNO2_xWQW4VnklsTdaXsT2GbuRy1jlolKjA3glw5OFcimpbxR0cfkrI24NszDXXvGF_fBxjpDdm-fLklMHRUfOP-BFU5y6Tz95rlHNYwOwlPb2z3j8pSbOS0hw5pedP6eL5MQYgwa8tM9S4uuyWUXZWh_j3RJ33PhYl-WWODm4BXV9YJcB9VKPjKHkUDhNlZiaerT7h9gLCSUyBfnaCfjota_0lP42oTNsaRAvYpaHHa2O5yzOComX5jk3w",
    title: "Perfil de explorador",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU1u45NVYyof0KwADozwNwUT4H3GbRVtcD4qjw7LnIQeY6-kDTIQUsuMEo1hor6A-oGGbaBrl9oLot1_JCbgZdeHvcaXlii22wdFAuLK6WIURTLIgXb3xJGkpq5w5cLV7qvdaIEYRemxuUKASYk5BbWuvWfYVOrX7zYNRugBCGJ-AuNzDQOJcY36xC0d3JQWDkCoiaceEzrgebo4fP0jqBG70z3ANUmkN5RqQ1xFCIV5da4RiZtJAj1WAYMNpHk4mlldn2pP2gwOA",
    title: "Perfil de explorador",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpHPL4vhoJxfYiQGG60YrEtzUyjJ2N09VhtsiECQx2GwAbBnSGSBBtKBS8_VBCXr6-nnVmN0EHb6lH4IJ2oZxhL4ZbhJiR7jSH9nVx9KeOLgs7RQhuXprxB9yCCGNDaYIRTlGHvQJCDrZxOtUKg-c5HHWv0rSD8L-fr8TKJSzJwcTdyQRqJyV4F41otj7KVhbpDMPs1Q-s1EmQdMBxe_ZVeYLitA9eV5yCGH5pc9DqEBVaXK80OW2FmgJT2avDBMEcSzM_ob-kODc",
    title: "Perfil de explorador",
  },
];

const LoginBranding: React.FC = () => {
  return (
    <div className="relative hidden w-full lg:flex lg:w-1/2 xl:w-3/5">
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItsInyQFnTJcBTt_xU0q1d4ZiX_JuAPmtU_kBF_gyJgd-QYg6m8VZ5i0wvtpSoqy2ZqGTZq6hmmp3FPWtza0ObhloaI9tj8OKbXGUMTybcOMboT2HW8hFEmoTEFijA4CMVf4vmAVwxIUuPBUH_pupI0N21RCxd-KY1B5f3tUtrwJ3vLvQrppodik0okTV_d5HYUNhCvoGKTpijmwxXPUsQWs1tGWMPNcbQcQNPsYQ0SVKXQ1Pd7SASaSFSa3fTVZb9mx-9uVH-NE"
          alt="Vista aérea del dosel amazónico"
          title="Vista aérea del dosel amazónico"
          fill
          sizes="60vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-light opacity-40"></div>

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-12 text-white">
        <Link
          href="/"
          className="flex items-center gap-3"
          title="Ir a inicio"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <Icon name="forest" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Amaturis</h2>
        </Link>

        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-extrabold leading-tight">
            Embárcate en tu viaje amazónico.
          </h1>
          <p className="text-lg font-medium opacity-90">
            Experimenta la belleza pura de las cascadas y el alma verde profunda
            del paraíso oculto de Colombia.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarImages.map((avatar, index) => (
              <div
                key={avatar.src}
                className="h-10 w-10 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={avatar.src}
                  alt={`Avatar de explorador ${index + 1}`}
                  title={avatar.title}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold">Únete a más de 5.000 aventureros</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBranding;
