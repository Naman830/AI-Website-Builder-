import {
  AccountSettingsCards,
  ChangePasswordCard,
  DeleteAccountCard,
} from "@daveyplate/better-auth-ui";

const Settings = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#09090B] flex flex-col items-center px-4 py-16
    "
    >
      {/* Wrapper */}
      <div className="w-full max-w-2xl space-y-6">
        <AccountSettingsCards
          classNames={{
            card: {
              base: `
                bg-[#18181B]/80 backdrop-blur-xl
                border border-[#27272A]
                rounded-2xl
                shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_10px_30px_rgba(0,0,0,0.6)]
                transition-all duration-300
                hover:border-[#7C3AED]/40
              `,
              footer: `
                bg-[#18181B]/60
                border-t border-[#27272A]
                rounded-b-2xl
              `,
            },
          }}
        />
        <div className="w-full">
          <ChangePasswordCard
            classNames={{
              base: `
              bg-[#18181B]/80 backdrop-blur-xl
              border border-[#27272A]
              rounded-2xl
              shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              transition-all duration-300
              hover:border-[#7C3AED]/40
            `,
              footer: `
              bg-[#18181B]/60
              border-t border-[#27272A]
              rounded-b-2xl
            `,
            }}
          />
        </div>
        <div className="w-full">
          <DeleteAccountCard
            classNames={{
              base: `
              bg-[#18181B]/80 backdrop-blur-xl
              border border-[#27272A]
              rounded-2xl
              shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              transition-all duration-300
              hover:border-red-500/40
            `,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
