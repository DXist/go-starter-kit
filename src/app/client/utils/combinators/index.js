/**
 * Created by laiff on 13.09.15.
 */

export const identity = a => a;

export const constant = a => _ => a;

export const compose = f => g => x => f(g(x));
