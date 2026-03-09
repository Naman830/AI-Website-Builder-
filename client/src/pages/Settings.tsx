import { AccountSettingsCards } from "@daveyplate/better-auth-ui";

const Settings = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center min-h-[90vh]">
      <AccountSettingsCards 
      classNames={{
        card: {
            base: 'bg-black/10 ring ring-indigo-950 max-w-xl mx-auto',
            footer: 'bg-black/10 ring ring-indigo-950'
        }
      }}
      />
    </div>
  );
};

export default Settings;
