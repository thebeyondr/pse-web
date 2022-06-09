import { Project } from '../interfaces';

export const projectData: Project[] = [
    {
        name: 'Zkopru',
        image: 'zkopru-cover.png',
        description:
            'Zkopru is an optimistic rollup that uses zero knowledge proofs to enable private, low-cost transactions with ETH, ERC-20s and NFTs on layer 2.',
        links: {
            website: 'https://zkopru.network/',
            github: 'https://github.com/zkopru-network',
            discord: 'https://discord.gg/R8QKzad8u4',
        },
    },
    {
        name: 'BLS Wallet',
        image: 'bls.svg',
        description:
            'Reduce transaction costs on evm-L2s using BLS signatures. The smart contract wallet also includes: recovery, multi-action, gas-less transactions, and upgradability.',
        links: {
            website: 'https://blswallet.org/',
            github: 'https://github.com/web3well/bls-wallet',
        },
    },
    {
        name: 'zkEVM',
        image: '',
        description:
            'A zk-rollup that can generate zk proofs for general EVM verification. This allows us to build a fully EVM-compatible zk-Rollup, which any existing Ethereum application can easily migrate to.',
        links: {
            website:
                'https://privacy-scaling-explorations.github.io/zkevm-docs/',
            github: 'https://github.com/appliedzkp/zkevm-circuits',
        },
    },
    {
        name: 'MACI (Minimal Anti-Collusion Infrastructure)',
        image: 'MACI.svg',
        description:
            'MACI uses zero knowledge proofs for collusion resistance in blockchain voting (such as quadratic funding mechanisms) by making it impossible for anyone other than the vote coordinator to verify how a specific user voted. MACI also ensures correct execution of the votes, allowing anyone to verify the results.',
        links: {
            github: 'https://github.com/appliedzkp/maci',
        },
    },
    {
        name: 'Unirep',
        description:
            'Unirep allows anonymous members of a group to give, receive, and prove reputation without revealing their identity. Applications or people can act as attesters and build their own reputation tokens on top of a shared Unirep contract.',
        image: 'unirep.svg',
        links: {
            website: 'https://unirep.social/',
            github: 'https://github.com/unirep',
            discord: 'https://discord.gg/qrqq8SeN7F',
        },
    },
    {
        name: 'Semaphore',
        description:
            'Semaphore is a protocol, designed to be a simple and generic privacy layer for Ethereum DApps. Using zero knowledge, Ethereum users can prove their membership of a group and send signals such as votes or endorsements without revealing their original identity.',
        image: 'semaphore.svg',
        links: {
            website: 'https://semaphore.appliedzkp.org/',
            github: 'https://github.com/semaphore-protocol/semaphore/',
            telegram: 'https://t.me/joinchat/B-PQx1U3GtAh--Z4Fwo56A',
        },
    },
    {
        name: 'Interep',
        description:
            'Private reputation and identity system allowing services to verify that users belong to a certain group or meet certain reputation criteria without revealing their identities. Users can anonymously export reputation from platforms such as Twitter and Github.',
        image: 'interep.svg',
        links: {
            website: 'https://interep.link/',
            github: 'https://github.com/interep-project',
            discord: 'https://discord.gg/jMfye2mWcf',
        },
    },
    {
        name: 'Clr.fund for Everyone',
        shortName: 'Clr.fund',
        image: 'clr.svg',
        description:
            'Infrastructure to make it easy for any community to run their own CLR round with clr.fund.',
        links: {
            website: 'https://clr.fund/#/',
            github: 'https://clrfund.gitbook.io/deployer/',
        },
    },
    {
        name: 'Rate Limiting Nullifier',
        shortName: 'RLN',
        image: 'rln.svg',
        description:
            'RLN is a construct based on zero-knowledge proofs that enables spam prevention mechanism for decentralized, anonymous environments. In anonymous environments, the identity of the entities is unknown.',
        links: {
            website:
                'https://ethresear.ch/t/semaphore-rln-rate-limiting-nullifier-for-spam-prevention-in-anonymous-p2p-setting/5009',

            github: 'https://github.com/bdim1/rlnapp',
        },
    },
    {
        name: 'zk-chat',
        image: '',
        description:
            'Anonymous and private chat environments, using Interep for a privacy preserving registry and sybil resistance and RLN for spam protection.',
        links: {
            website: 'zkchat.org',
            github: 'github.com/njofce/zk-chat',
        },
    },
    {
        name: 'COCO',
        description:
            'Collaborative content curation of online communities using a double-or-nothing challenge mechanism.',
        image: 'Coco.svg',
        links: {
            website: 'https://www.cocoverse.club/',
            github: 'https://github.com/Janmajayamall/coco-contracts',
            telegram: 'https://t.me/+A47HJeqh0-tlODI1',
        },
    },
    {
        name: 'Trusted Setup',
        image: 'trust-setup.svg',
        description:
            'Open source infrastructure for running a trusted setup ceremony, in which many people participate in generating entropy which will secure a cryptographic protocol. Perpetual Powers of Tau: A universal ceremony for the initial phase of a trusted setup. MPC Phase 2 UI: UI for a CLI or browser-based ceremony for the second, circuit-specific phase for Groth-16 SNARKs.',
        links: {
            website:
                'github.com/privacy-scaling-explorations/perpetualpowersoftau',
            github: 'github.com/zkparty/setup-mpc-ui',
        },
    },
    {
        name: 'TLSNotary',
        shortName: 'TLSN',
        description:
            'TLSNotary leverages the ubiquitous TLS protocol to allow users to privately export their data from any webserver in a provable way.',
        image: 'tlsn.png',
        links: {
            website: 'https://tlsnotary.org',
            github: 'https://github.com/tlsnotary/tlsn',
            discord: 'https://discord.gg/9XwESXtcN7',
        },
    },
];
