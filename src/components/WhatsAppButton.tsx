import { business } from '@/data/business';

export default function WhatsAppButton() {
  const href = `https://wa.me/${business.whatsappNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.317.657 4.48 1.797 6.318L4 29l7.86-1.756A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.99 0-3.85-.58-5.415-1.578l-.388-.24-4.665 1.042 1.06-4.548-.253-.395A9.717 9.717 0 0 1 6.25 15c0-5.385 4.373-9.75 9.754-9.75 5.38 0 9.746 4.365 9.746 9.75s-4.366 9.75-9.746 9.75Zm5.354-7.302c-.293-.147-1.734-.856-2.003-.955-.269-.098-.464-.147-.66.148-.195.294-.756.955-.928 1.15-.171.196-.342.22-.635.074-.293-.147-1.238-.456-2.358-1.455-.872-.778-1.461-1.739-1.632-2.033-.171-.294-.018-.453.129-.6.132-.132.293-.343.44-.514.146-.172.195-.294.293-.49.098-.196.05-.368-.024-.515-.073-.147-.66-1.59-.904-2.177-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.368-.269.294-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.196 3.033.147.196 2.067 3.157 5.01 4.428.7.302 1.246.483 1.672.618.702.224 1.341.192 1.847.117.563-.084 1.734-.709 1.978-1.394.244-.686.244-1.273.171-1.394-.073-.122-.269-.196-.562-.343Z" />
      </svg>
    </a>
  );
}
