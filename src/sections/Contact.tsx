import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900">Contact</h2>

        <div className="mt-8 space-y-3">
          <p>Email: hwarang29@naver.com</p>
          <a
            href="https://github.com/JUNGHEEYOUNG9090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
