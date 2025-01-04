import type { Transformer } from "grammy";

const disablePreview: Transformer = (prev, method, payload, signal) => {
  const newPayload: typeof payload = {
    link_preview_options: { is_disabled: true },
    ...payload,
  };
  return prev(method, newPayload, signal);
};

export default disablePreview;
