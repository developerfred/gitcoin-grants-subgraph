import { DonationSent as DonationSentEvent,  TokenWithdrawn as TokenWithdrawnEvent, Paused as PausedEvent, Unpaused as UnpausedEvent } from "../generated/BulkCheckout/BulkCheckout"
import { DepositMade as DepositMadeEvent} from "../generated/BatchZkSyncDeposit/BatchZkSyncDeposit";
import {
  PayoutClaimed as PayoutClaimedEvent,
  PayoutAdded as PayoutAddedEvent,
} from "../generated/MatchPayouts/MatchPayouts";
import {
  DonationSent,
  TokenWithdrawn,
  Paused,
  Unpaused,
  DepositMade,
  PayoutClaimed,
  PayoutAdded,
} from "../generated/schema"; 

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

export function handlePayoutClaimed(
         event: PayoutClaimedEvent
       ): void {
         let payout = new PayoutClaimed(
           event.transaction.hash.toHex() + "-" + event.logIndex.toString()
         );

        payout.recipient = event.params.recipient;
        payout.amount = event.params.amount;
        payout.save();
       }


export function handlePayoutAdded(
         event: PayoutAddedEvent
       ): void {
         let payout = new PayoutAdded(
           event.transaction.hash.toHex() + "-" + event.logIndex.toString()
         );

        payout.recipient = event.params.recipient;
        payout.amount = event.params.amount;
        payout.save();
       }
