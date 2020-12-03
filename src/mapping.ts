import { DonationSent as DonationSentEvent,  TokenWithdrawn as TokenWithdrawnEvent, Paused as PausedEvent, Unpaused as UnpausedEvent } from "../generated/BulkCheckout/BulkCheckout"
import { DepositMade as DepositMadeEvent} from "../generated/BatchZkSyncDeposit/BatchZkSyncDeposit";
import {
  DonationSent,
  TokenWithdrawn,
  Paused,
  Unpaused,
  DepositMade
} from "../generated/schema" 

export function handleDonationSent(event: DonationSentEvent): void {
  let entity = new DonationSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.dest = event.params.dest
  entity.donor = event.params.donor
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

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  
  entity.account = event.params.account
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  
  entity.account = event.params.account
  entity.save()
}

export function handleDepositMade(event: DepositMadeEvent): void {
  let entity = new DepositMade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.user = event.params.user
  entity.save()
}