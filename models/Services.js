import mongoose from "mongoose";
import { oneTimeServiceSchema } from "./OneTimeService";
import { otherServiceSchema } from "./OtherService";
import { sqftSchema } from "./Sqft";
import { subscriptionServiceSchema } from "./SubscriptionService";

export const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  sqftCheckbox: {
    type: Boolean,
  },
  squireFootageMatters: [sqftSchema],
  oneTimeService: oneTimeServiceSchema,
  subscriptionService: subscriptionServiceSchema,
  otherService: otherServiceSchema,
});

const Services =
  mongoose.models.Services || mongoose.model("Services", servicesSchema);

export default Services;
