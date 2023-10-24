const z = require("zod");

const surveySchema = z.object({
  age: z.string({
    invalid_type_error: "Age must be a string",
    required_error: "Age is required",
  }),
  country: z.string({
    invalid_type_error: "Country must be a string",
    required_error: "Country is required",
  }),
  itLevel: z.string({
    invalid_type_error: "itLevel must be a string",
    required_error: "itLevel is required",
  }),
  seen: z.string({
    invalid_type_error: "Seen must be a string",
    required_error: "Seen is required",
  }),
  impressCalification: z.string({
    invalid_type_error: "Impress Calification must be a string",
    required_error: "Impress Calification is required",
  }),
  opinion: z.string({
    invalid_type_error: "Seen must be a string",
    required_error: "Seen is required",
  }),
  projectsCalification: z.string({
    invalid_type_error: "Projects Calification must be a string",
    required_error: "Projects Calification is required",
  }),
  relevant: z.string().default("No comments"),
  improveOrFeature: z.string().default("No comments"),
  suggestions: z.string().default("No comments"),
});

const validateSurvey = (input) => {
  return surveySchema.safeParse(input);
};

module.exports = {
  validateSurvey,
};
