function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-indigo-500">Contact  <span className="text-indigo-400 border-b-2">Me</span> </h3>

        <form className="space-y-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-slate-900 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-slate-900 border border-gray-700"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-xl bg-slate-900 border border-gray-700"
          />
          <button className="bg-primary px-6 py-3 rounded-xl hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
