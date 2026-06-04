trigger triggerOnAccount on Account (before insert ,before Update) {
    System.debug(Trigger.new +'Account is being inserted!'+Trigger.old);

}