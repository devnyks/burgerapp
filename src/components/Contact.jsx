import NewBanner from "../assets/newbanner.png";

const Contact = () => {
  return (
    <div className="flex justify-center flex-wrap py-10 p-4">
      <img src={NewBanner} alt="" />
      <form className="flex flex-col gap-5 p-8">
        <h1 className="text-4xl pb-4 text-center font-medium">
          Bizimle iletişime geçin
        </h1>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="name">Ad Soyad</label>
          <input
            className="outline-none border-black border-b-2"
            id="name"
            type="text"
            placeholder="Lütfen adınızı ve soyadınızı giriniz."
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none border-black border-b-2"
            id="email"
            type="text"
            placeholder="Lütfen email adresinizi giriniz."
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="text">Mesajınız</label>
          <textarea
            className="outline-none border-black border-b-2"
            id="text"
            type="week"
            placeholder="Lütfen mesajınızı giriniz."
          />
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-xl w-48 mt-6 hover:bg-red-700">
          Gönder!
        </button>
      </form>
    </div>
  );
};

export default Contact;