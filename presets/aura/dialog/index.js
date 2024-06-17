export default {
  root: ({ state }) => ({
    class: [
      // Shape
      "shadow-lg",
      "border-0",

      // Size
      "max-h-[90vh]",
      "m-0",

      // Color
      "bg-surface-0 dark:bg-surface-900",

      // Transitions
      "transform",
      "scale-100",

      // Maximized State
      {
        "transition-none": state.maximized,
        "transform-none": state.maximized,
        "!w-screen": state.maximized,
        "!h-screen": state.maximized,
        "!max-h-full": state.maximized,
        "!top-0": state.maximized,
        "!left-0": state.maximized,
      },
    ],
  }),

  title: {
    class: ["font-semibold text-xl leading-[normal]"],
  },
  icons: {
    class: ["flex items-center absolute top-0 right-0 bg-text-secondary"],
  },
  closeButton: {
    class: [
      "relative text-white",

      // Flexbox and Alignment
      "flex items-center justify-center",

      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "size-[38px]",

      // Shape
      "border-0",

      // Colors
      "text-surface-500",
      "bg-transparent",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "focus:ring-primary-500 dark:focus:ring-primary-400",

      // Misc
      "overflow-hidden",
    ],
  },
  maximizablebutton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "flex items-center justify-center",

      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-7 h-7",

      // Shape
      "border-0",

      // Colors
      "text-surface-500",
      "bg-transparent",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "focus:ring-primary-500 dark:focus:ring-primary-400",

      // Misc
      "overflow-hidden",
    ],
  },
  closeButtonIcon: {
    class: [
      // Display
      "inline-block",

      // Size
      "w-4",
      "h-4",
    ],
  },
  maximizableicon: {
    class: [
      // Display
      "inline-block",

      // Size
      "w-4",
      "h-4",
    ],
  },
  content: ({ state, instance }) => ({
    class: [
      // Spacing

      // Shape
      {
        grow: state.maximized,
      },

      // Colors
      "text-surface-700 dark:text-surface-0/80",

      // Misc
      "overflow-y-auto",
    ],
  }),

  mask: ({ props }) => ({
    class: [
      // Transitions
      "transition-all",
      "duration-300",
      { "p-5": !props.position == "full" },

      // Background and Effects
      { "has-[.mask-active]:bg-transparent bg-black/80": props.modal },
    ],
  }),
  transition: ({ props }) => {
    return props.position === "top"
      ? {
          enterFromClass:
            "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
          enterActiveClass: "transition-all duration-200 ease-out",
          leaveActiveClass: "transition-all duration-200 ease-out",
          leaveToClass:
            "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
        }
      : props.position === "bottom"
      ? {
          enterFromClass: "opacity-0 scale-75 translate-y-full mask-active",
          enterActiveClass: "transition-all duration-200 ease-out",
          leaveActiveClass: "transition-all duration-200 ease-out",
          leaveToClass:
            "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active",
        }
      : props.position === "left" ||
        props.position === "topleft" ||
        props.position === "bottomleft"
      ? {
          enterFromClass:
            "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active",
          enterActiveClass: "transition-all duration-200 ease-out",
          leaveActiveClass: "transition-all duration-200 ease-out",
          leaveToClass:
            "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active",
        }
      : props.position === "right" ||
        props.position === "topright" ||
        props.position === "bottomright"
      ? {
          enterFromClass:
            "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
          enterActiveClass: "transition-all duration-200 ease-out",
          leaveActiveClass: "transition-all duration-200 ease-out",
          leaveToClass:
            "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
        }
      : {
          enterFromClass: "opacity-0 scale-75 mask-active",
          enterActiveClass: "transition-all duration-200 ease-out",
          leaveActiveClass: "transition-all duration-200 ease-out",
          leaveToClass: "opacity-0 scale-75 mask-active",
        };
  },
};
