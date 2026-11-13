export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Add REAL feedback only, with the client's permission.
// While this list is empty, the Testimonials section stays hidden.
export const testimonials: Testimonial[] = [];