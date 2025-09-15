import React from "react";

interface IContacts {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface ContactsProps {
  formData: IContacts;
  setFormData: React.Dispatch<React.SetStateAction<IContacts>>;
}

export const Contacts = ({ formData, setFormData }: ContactsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4 max-w-full p-4 pb-12 rounded-2xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[var(--rosewood)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[var(--rosewood)]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[var(--rosewood)]"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[var(--rosewood)]"
        />
      </div>
    </div>
  );
};
