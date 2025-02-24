import { z } from "zod";

// const FileSchema = typeof File === "undefined" ? z.any() : z.instanceof(File);

export type VideoFormKey =
  | "model"
  | "prompt"
  | "firstFile"
  | "lastFile"
  | "firstFrame"
  | "lastFrame"
  | "thirdFile"
  | "thirdFrame"
  | "referenceImage1"
  | "referenceImage2"
  | "referenceImage3"
  | "referenceImage4"
  | "ratio"
  | "type"
  | "time"
  | "loop"
  | "audio"
  | "camera"
  | "style"
  | "template"
  | "viduType"
  | "viduStyle"
  | "viduTime"
  | "viduResolution"
  | "viduScene";

export const VideoSchema = z.object({
  model: z.string().optional(),
  prompt: z.string().optional(),
  firstFile: z.string().or(z.null()).optional(),
  lastFile: z.string().or(z.null()).optional(),
  firstFrame: z.string().or(z.null()).optional(),
  lastFrame: z.string().or(z.null()).optional(),
  thirdFile: z.string().or(z.null()).optional(),
  thirdFrame: z.string().or(z.null()).optional(),
  referenceImage1: z.string().or(z.null()).optional(),
  referenceImage2: z.string().or(z.null()).optional(),
  referenceImage3: z.string().or(z.null()).optional(),
  referenceImage4: z.string().or(z.null()).optional(),
  ratio: z.string().optional(),
  type: z.string().optional(),
  time: z.string().optional(),
  loop: z.string().optional(),
  audio: z.string().optional(),
  camera: z.string().optional(),
  style: z.string().optional(),
  template: z.string().optional(),
  viduType: z.string().optional(),
  viduStyle: z.string().optional(),
  viduTime: z.string().optional(),
  viduResolution: z.string().optional(),
  viduScene: z.string().optional(),
});
