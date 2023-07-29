interface IDisplay {
  isOpen: boolean;
}

interface IPropsDisplay {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IDisplay, IPropsDisplay };
