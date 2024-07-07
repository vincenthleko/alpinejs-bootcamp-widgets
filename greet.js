
const translations = {
    en: "Hello",
    sp: "Dumela",
    fr: "Bonjour",
    it: "Ciao"
    
  };
  
  document.addEventListener('alpine:init', () => {
    Alpine.data('greetComponent', () => ({
      name: 'Vincent',
      lang: 'en',
      get greeting() {
        const greeting = translations[this.lang] || translations['en'];
        return `${greeting}, ${this.name}`;
      },
      setLanguage(lang) {
        this.lang = lang;
      }
    }));
  });
  