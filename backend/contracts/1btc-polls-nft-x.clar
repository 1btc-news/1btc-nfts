
;; title: 1btc-polls-nft-x
;; version: 1.0.0
;; summary: NFT contract to reward 1btc poll participants

;; traits
(impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)

;; token definitions
(define-non-fungible-token one-btc-polls-nft-x uint)

;; constants
(define-constant contract-owner tx-sender)
(define-constant transfer-disabled (err u1000))

;; data vars
(define-data-var token-id-nonce uint u0)

;; public functions
;; TODO: add mint, can only be called by this contract when contract deploys
(define-public (transfer (token-id uint) (sender principal) (recipient principal))
	transfer-disabled
)

;; read only functions
(define-read-only (get-last-token-id)
	(ok (var-get token-id-nonce))
)
;; TODO: add btc:ord implementation
(define-read-only (get-token-uri (token-id uint))
	(ok none)
)
(define-read-only (get-owner (token-id uint))
	(ok (nft-get-owner? one-btc-polls-nft-x token-id))
)
