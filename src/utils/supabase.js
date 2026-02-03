import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://tkyibdfrvbusttfiomws.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_faH9S0uqLXDKV0dYCQfwHg_X_dqDQJz'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function createCard(items) {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/quick-responder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ items })
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Er ging iets mis')
    }

    return response.json()
}

export async function getCard(code) {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/get-card?code=${code}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Kaart niet gevonden')
    }

    return response.json()
}