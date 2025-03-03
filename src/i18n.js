import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load file dịch từ server
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ trình duyệt
  .use(initReactI18next) // Kết nối với react-i18next
  .init({
    supportedLngs: ["en", "vi"], // Ngôn ngữ hỗ trợ
    fallbackLng: "en", // Ngôn ngữ mặc định
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Cách phát hiện ngôn ngữ
      caches: ["localStorage", "cookie"], // Lưu ngôn ngữ vào localStorage và cookie
    },
    backend: {
      loadPath: "./src/i18n/locales/{{lng}}/translation.json", // Đường dẫn đến file dịch
    },
    interpolation: {
      escapeValue: false, // Không cần escape HTML
    },
  });

export default i18n;
