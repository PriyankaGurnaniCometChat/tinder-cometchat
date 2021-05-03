import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const withLayout = (
  BaseComponent,
  { bgWhite = false, bgImage = false } = {}
) => (props) => {
  return (
    <>
      <Navbar />
      <main className={`bg-${bgWhite ? "white" : "gray-200"}`}>
        <div
          style={{
            backgroundImage: bgImage ? 'url("/bg.webp")' : "none",
          }}
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-gray-700 flex justify-center items-center"
        >
          {bgImage && (
            <div className="absolute inset-0 bg-black opacity-25 h-full flex flex-col z-0"></div>
          )}
          <div className="z-10">
            <BaseComponent {...props} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { withLayout };
