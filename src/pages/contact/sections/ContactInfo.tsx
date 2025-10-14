const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow-sm border-l-4 border-red-600">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          Company Address
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          Themeforest, Envato
          <br />
          HQ 24 Fifth st., Los
          <br />
          Angeles, USA
        </h3>
      </div>

      <div className="bg-white p-6 shadow-sm flex items-start gap-4">
        <div className="bg-red-600 text-white p-3 rounded-full flex-shrink-0">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            Company Phones
          </p>
          <p className="text-base font-bold text-gray-900">+1 234 5678 098</p>
          <p className="text-base font-bold text-gray-900">+1 634 7638 654</p>
        </div>
      </div>

      <div className="bg-white p-6 shadow-sm flex items-start gap-4">
        <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            System Emails
          </p>
          <p className="text-base font-bold text-gray-900">dustro@gmail.com</p>
          <p className="text-base font-bold text-gray-900">
            dustro.info@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
