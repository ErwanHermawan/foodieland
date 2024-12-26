// --- zustand
import { create } from "zustand";

const useStateHeroBanner = create((set) => ({
	openModal: false,
	iframeData: "",
	setModal: (modalState) => set({ openModal: modalState }),
	setIframe: (iframeSrc) => set({ iframeData: iframeSrc }),
}));

export default useStateHeroBanner;
