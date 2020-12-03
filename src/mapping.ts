import { DonationSent as DonationSentEvent,  TokenWithdrawn as TokenWithdrawnEvent } from "../generated/BulkCheckout/BulkCheckout"
import { DepositMade as DepositMadeEvent} from "../generated/ZkSyncDeposit/ZkSyncDeposit"

import {
  DonationSent,
  TokenWithdrawn,
  DepositMade
} from "../generated/schema" 

export function handleDonationSent(event: DonationSentEvent): void {
  let entity = new DonationSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.dest = event.params.dest
  entity.save()
}

export function handleTokenWithdrawn(event: TokenWithdrawnEvent): void {
  let entity = new TokenWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.dest = event.params.dest
  entity.save()
}

export function handleDepositMade(event: DepositMadeEvent): void {
  let entity = new DepositMade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}