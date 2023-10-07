const z = require("zod");

const messageSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required",
  }),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email(),
  message: z.string({
    invalid_type_error: "Message must be a string",
    required_error: "Message is required",
  }).min(10),
});

const validateMessage = (input) => {
  return messageSchema.safeParse(input);
};

module.exports = {
    validateMessage
}
