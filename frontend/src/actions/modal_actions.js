export const OPENMODAL = "OPENMODAL"
export const CLOSEMODAL = "CLOSEMODAL"

export const closeModal = () => ({
  type: CLOSEMODAL
})

export const openModal = (modal) => ({
  type: OPENMODAL,
  modal
})