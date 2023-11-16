export default function Footer({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col w-full justify-center items-center text-[9px] sm:text-base text-gray-400 ${className}`}
    >
      2023 © Marcos Peres Ramos. Todos os direitos reservados.
    </section>
  );
}
