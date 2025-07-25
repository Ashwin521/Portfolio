"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await emailjs.send(
        "service_e703rit",
        "template_g83uzxf",
        {
          from_name: data.name,
          to_name: "Ashwin Giri",
          to_email: "your@email.com", // 🔁 REPLACE with your actual email address
          message: data.message,
          date: new Date().toLocaleString(),
        },
        "E1f-Sj1bK188XZ3Vq"
      );

      toast.success("Message sent successfully!");
      console.log("message sent");

      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 space-y-4 bg-white dark:bg-gray-900 shadow-md rounded"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
        Get in Touch
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        {...register("name", { required: "Name is required" })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      {/* Optional Email */}
      <input
        type="email"
        placeholder="Your Email (optional)"
        {...register("email")}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white"
      />

      {/* Message */}
      <textarea
        placeholder="Your Message"
        rows={5}
        {...register("message", { required: "Message is required" })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white"
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
