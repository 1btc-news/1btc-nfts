
;; title: onebtc-nft-x
;; version: 1.0.0
;; summary: NFT contract to reward 1btc chat participants

;; traits
(impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)

;; token definitions
(define-non-fungible-token onebtc-nft-x uint)

;; constants
(define-constant self (as-contract tx-sender))
(define-constant transfer-disabled (err u1000))

;; data vars
(define-data-var token-id-nonce uint u0)

;; public functions
(define-public (transfer (token-id uint) (sender principal) (recipient principal))
	transfer-disabled
)

;; read only functions
(define-read-only (get-last-token-id)
	(ok (var-get token-id-nonce))
)
(define-read-only (get-token-uri (token-id uint))
  ;; "It's not bragging if you can back it up."
	(ok (some "ord://i/33c37b1b4266490fc82e494d2f8a1c11156b5f89113e1849bf84165f8edcd78fi0"))
)
(define-read-only (get-owner (token-id uint))
	(ok (nft-get-owner? onebtc-nft-x token-id))
)

;; private functions
;; TODO: add mint, can only be called by this contract when contract deploys
(define-private (test-context (sender principal))
	(begin 
		(print {
			sender: sender,
			self: self,
			tx-sender: tx-sender,
			contract-caller: contract-caller,
		})
		(ok true)
	)
)

(test-context self)
