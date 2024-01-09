const questions = [
    {
        question: "When talking to a customer or co-worker ...",
        a: "I maintain eye contact the whole time.",
        b: "I alternate between looking at the person and looking down.",
        c: "I look around the room a good deal of the time.",
        d: "I try to maintain eye contact but look away from time to time."
    },
    {
        question: "If I have an important decision to make ...",
        a: "I think it through completely before deciding.",
        b: "I go with my gut instincts.",
        c: "I consider the impact it will have on other people before deciding.",
        d: "I run it by someone whose opinion I respect before deciding."
    },
    {
        question: "My office or work area mostly has ...",
        a: "Family photos and sentimental items displayed.",
        b: "Inspirational posters, awards, and art displayed.",
        c: "Graphs and charts displayed.",
        d: "Calendars and project outlines displayed."
    },
    {
        question: "If I am having a conflict with a co-worker or customer ...",
        a: "I try to help the situation along by focusing on the positive.",
        b: "I stay calm and try to understand the cause of the conflict.",
        c: "I try to avoid discussing the issue causing the conflict.",
        d: "I confront it right away so that it can get resolved as soon as possible."
    },
    {
        question: "When I talk on the phone at work ...",
        a: "I keep the conversation focused on the purpose of the call.",
        b: "I spend a few minutes chatting before getting down to business.",
        c: "I am in no hurry to get off the phone and don't mind chatting about personal things, the weather, and so on.",
        d: "I try to keep the conversation as brief as possible."
    },
    {
        question: "If a co-worker is upset ...",
        a: "I ask if I can do anything to help.",
        b: "I leave him alone because I don't want to intrude on his privacy.",
        c: "I try to cheer him up and help him to see the bright side.",
        d: "I feel uncomfortable and hope he gets over it soon."
    },
    {
        question: "When I attend meetings at work ...",
        a: "I sit back and think about what is being said before offering my opinion.",
        b: "I put all my cards on the table so my opinion is well known.",
        c: "I express my opinion enthusiastically, but listen to other's ideas as well.",
        d: "I try to support the ideas of the other people in the meeting."
    },
    {
        question: "When I make a presentation in front of a group ...",
        a: "I am entertaining and often humorous.",
        b: "I am clear and concise.",
        c: "I speak relatively quietly.",
        d: "I am direct, specific, and sometimes loud."
    },
    {
        question: "When a customer is explaining a problem to me ...",
        a: "I try to understand and empathize with how she is feeling.",
        b: "I look for the specific facts pertaining to the situation.",
        c: "I listen carefully for the main issue so that I can find a solution.",
        d: "I use my body language and tone of voice to show her that I understand."
    },
    {
        question: "When I attend training programs or presentations ...",
        a: "I get bored if the person moves too slowly.",
        b: "I try to be supportive of the speaker, knowing how hard the job is.",
        c: "I want it to be entertaining as well as informative.",
        d: "I look for the logic behind what the speaker is saying."
    },
    {
        question: "When I want to get my point across to customers or co-workers ...",
        a: "I listen to their point of view first and then express my ideas gently.",
        b: "I strongly state my opinion so that they know where I stand.",
        c: "I try to persuade them without being too forceful.",
        d: "I explain the thinking and logic behind what I am saying."
    },
    {
        question: "When I am late for a meeting or appointment ...",
        a: "I don't panic but call ahead to say that I will be a few minutes late.",
        b: "I feel bad about keeping the other person waiting.",
        c: "I get very upset and rush to get there as soon as possible.",
        d: "I apologize profusely once I arrive."
    },
    {
        question: "I set goals and objectives at work that ...",
        a: "I think I can realistically attain.",
        b: "I feel are challenging and would be exciting to achieve.",
        c: "I need to achieve as part of a bigger objective.",
        d: "Will make me feel good when I achieve them."
    },
    {
        question: "When explaining a problem to a co-worker whom I need help from ...",
        a: "I explain the problem in as much detail as possible.",
        b: "I sometimes exaggerate to make my point.",
        c: "I try to explain how the problem makes me feel.",
        d: "I explain how I would like the problem to be solved."
    },
    {
        question: "If customers or co-Workers are late for a meeting with me in my office ...",
        a: "I keep myself busy by making phone calls or working until they arrive.",
        b: "I assume they were delayed a bit and don't get upset.",
        c: "I call to make sure that I have the correct information (date, time, and so on).",
        d: "I get upset that the person is wasting my time."
    },
    {
        question: "When I am behind on a project and feel pressure to get it done ...",
        a: "I make a list of everything I need to do, in what order, by when.",
        b: "I block out everything else and focus 100 percent on the work I need to do.",
        c: "I become anxious and have a hard time focusing on my work.",
        d: "I set a date to get the project done by and go for it."
    },
    {
        question: "When I feel verbally attacked by a customer or a co-worker ...",
        a: "I tell her to stop it.",
        b: "I feel hurt but usually don't say anything about it to her.",
        c: "I ignore her anger and try to focus on the facts of the situation.",
        d: "I let her know in strong terms that I don't like her behavior."


    },
    {
        question: "When I see a co-worker or customer whom I like and haven't seen recently ...",
        a: "I give him a friendly hug.",
        b: "I greet him but don't shake his hand.",
        c: "I give him a firm but quick handshake.",
        d: "I give him an enthusiastic handshake that lasts a few moments."
    }
];


const answers = {
    1: {
        a: "driver",
        b: "amiable",
        c: "analytical",
        d: "expressive"
    },
    2: {
        a: "analytical",
        b: "driver",
        c: "amiable",
        d: "expressive"
    }, 
    3: {
        a: "amiable",
        b: "expressive",
        c: "analytical",
        d: "driver"
    },
    4: {
        a: "expressive",
        b: "amiable",
        c: "analytical",
        d: "driver"
    },
    5: {
        a: "driver",
        b: "expressive",
        c: "amiable",
        d: "analytical"
    },
    6: {
        a: "amiable",
        b: "analytical",
        c: "expressive",
        d: "driver"
    },
    7: {
        a: "analytical",
        b: "driver",
        c: "expressive",
        d: "amiable"
    },
    8: {
        a: "expressive",
        b: "analytical",
        c: "amiable",
        d: "driver"
    },
    9: {
        a: "amiable",
        b: "analytical",
        c: "driver",
        d: "expressive"
    },
    10: {
        a: "driver",
        b: "amiable",
        c: "expressive",
        d: "analytical"
    },
    11: {
        a: "amiable",
        b: "driver",
        c: "expressive",
        d: "analytical"
    },
    12: {
        a: "analytical",
        b: "amiable",
        c: "driver",
        d: "expressive"
    },
    13: {
        a: "analytical",
        b: "expressive",
        c: "driver",
        d: "amiable"
    },
    14: {
        a: "analytical",
        b: "expressive",
        c: "amiable",
        d: "driver"
    },
    15: {
        a: "expressive",
        b: "amiable",
        c: "analytical",
        d: "driver"
    },
    16: {
        a: "analytical",
        b: "driver",
        c: "amiable",
        d: "expressive"
    },
    17: {
        a: "driver",
        b: "amiable",
        c: "analytical",
        d: "expressive"
    },
    18: {
        a: "amiable",
        b: "analytical",
        c: "driver",
        d: "expressive"
    },
}

const criteria = [
    "driver",
    "amiable",
    "analytical",
    "expressive"
]


const rubric = new Map();
resetRubric();

function resetRubric() {
    rubric.set("driver", 0);
    rubric.set("amiable", 0);
    rubric.set("analytical", 0);
    rubric.set("expressive", 0);
}
