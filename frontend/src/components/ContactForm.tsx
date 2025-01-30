import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Validation schema using Zod
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

type FormData = z.infer<typeof formSchema>;

export default function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
        <p className="text-gray-600 mt-2">
          Your enquiry has been submitted successfully. We'll get back to you
          soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Enquiry Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            {...register("name")}
            placeholder="John Doe"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-white">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="123-456-7890"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            {...register("message")}
            placeholder="Tell us about your enquiry..."
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-5 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
