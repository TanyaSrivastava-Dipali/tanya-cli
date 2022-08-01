#!/usr/bin/env node
import { ConnectEnv } from 'tanya-evm';
declare global {
    namespace NodeJS {
        interface ProcessEnv extends ConnectEnv {
        }
    }
}
