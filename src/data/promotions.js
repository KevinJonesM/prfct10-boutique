const promotions = {
  vaultCampaign: {
    id: "prfct10-vault",
    enabled: false,
    inventoryStatus: "stored-inventory",
    publicNames: { en: "PRFCT10 Vault", es: "Bóveda PRFCT10" }
  },
  mindGymThreeForTen: {
    id: "mind-gym-3-for-10",
    enabled: false,
    eligibleInventoryStatus: "stored-inventory",
    requiredQuantity: 3,
    bundlePrice: 10
  },
  mindGymMysteryBag: {
    id: "mind-gym-mystery-bag",
    enabled: true,
    eligibleInventoryStatus: "stored-inventory",
    price: 14.99
  },
  storedInventoryGiftOver75: {
    id: "stored-inventory-gift-75",
    enabled: false,
    minimumSubtotal: 75,
    eligibleInventoryStatus: "stored-inventory"
  }
};

export { promotions };
