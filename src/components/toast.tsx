import { CalendarCheck, XIcon } from "lucide-react";
import { toast as sonnerToast } from "sonner";

export interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button: {
    onClick: () => void;
  };
}

export function Toast(props: ToastProps) {
  const { title, description, button, id } = props;

  return (
    <div className="flex rounded-lg bg-green-200 shadow-lg ring-1 ring-black/3 w-full md:w-md items-center p-4">
      <CalendarCheck className="w-6 h-6 text-green-800 fill-white" />
      <div className="px-2 flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium text-gray-950">{title}</p>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-green-600 hover:text-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden">
        <button
          className="rounded bg-transparent px-2 py-2 text-sm font-semibold text-green-600 hover:bg-green-100"
          onClick={() => {
            button.onClick();
            sonnerToast.dismiss(id);
          }}
        >
          <XIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
