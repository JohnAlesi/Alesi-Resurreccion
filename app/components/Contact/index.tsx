import React from "react";

const Contact = () => {
  return (
    <div className="text-start mt-12">
      <code className="font-extrabold underline">Contact:</code>
      <div className="mt-4 md:ml-14 flex flex-col mb-2">
        {/* Twitter */}
        <a
          href="https://x.com/0xJares"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <i className="devicon-twitter-original"></i>
          <code className="ml-2 hover:underline">@0xJares</code>
        </a>

        {/* LinkedIn */}
        <a
          className="flex items-center mt-4"
          href="https://www.linkedin.com/in/john-alesi-resurreccion-568633285/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
          <code className="ml-2 hover:underline">John Alesi Resurreccion</code>
        </a>

        {/* GitHub */}
        <a
          className="flex items-center mt-4"
          href="https://github.com/JohnAlesi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original"></i>
          <code className="ml-2 hover:underline">JohnAlesi</code>
        </a>
        <a
          href="mailto:resurreccionjohnalesi@gmail.com"
          className="flex items-center mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="md:w-4 md:h-4 w-8 h-8 fill-current"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
          </svg>
          <code className="ml-2 break-all hover:underline">resurreccionjohnalesi@gmail.com</code>
        </a>
      </div>
      <code className="font-extrabold underline">Previous Employer:</code>
      <div className="md:ml-14 flex flex-col">
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="fill-current w-4 h-4"
          >
            <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
          </svg>
          <code className="ml-2">Nerlisa Bailon</code>
        </div>
        <a className="flex items-center" href="mailto:nerlisabailon.24@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 h-8 md:w-4 md:h-4 fill-current"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
          </svg>
          <code className="ml-2 break-all hover:underline">nerlisabailon.24@gmail.com</code>
        </a>
      </div>
    </div>
  );
};

export default Contact;
