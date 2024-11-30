import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      rating: "",
    });
  };

  return (
    <div>
      <h1>Feedback</h1>
      <p>We value your feedback! Please let us know your thoughts below.</p>
      {submitted ? (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>Your response has been recorded.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your feedback"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Rating:
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="">Select a rating</option>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </label>
          </div>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
