import * as Joi from "joi";

export const JoiValidationSchema = Joi.object({ //este le gana a las configuraciones de EnvConfiguration este es como si se creara en el archivo .env
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6) 
})