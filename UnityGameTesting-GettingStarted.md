<i>Authoured by: Hashir Sarwar</i>

Video games today are highly interactive with complex gaming mediums and coupled with several users consuming games over multiple platforms, which make these more susceptible to vulnerability, unexpected errors, and glitches. These might go unnoticed and unresolved without a proper testing mechanism. Hence, testing is crucial to avoid criticisms from gamers, losing out on significant sales due to poor experiences.

# How Game Testing is different from other Software Testing.

Testing games is a repetitive process every new build may have bugs and must be tested thoroughly.

All game testing follows a basic structure irrespective of the size of the game & time required for producing the game.

The Quality assurance professional needs to study game rules & requirements. Understand the overall game component architecture and file architecture, the flow, and the file structures and the dependencies associated with the game. With every new prototype of the game, the tests documents need to be frequently revisited to update any change in the specifications, new game testing test cases & new configuration support. A video game tester should ensure that no new issues were introduced.

Game Tester jobs involves:

- Classify the requirements based on the intended purpose and target audience.
- Identify the user and system requirement and should be classified into functional, nonfunctional, domain requirements
- Identify Testable items, Non-testable items, targets and measures for functional and nonfunctional requirements
- Check if the functional requirements are complete, consistent & comprehensible
- Identify customizable requirements, conflicting requirements
- Identify interdependent requirements is one of the game testing jobs.
- Prioritize the requirements based on the uniqueness, complexity, criticality
- Identify the theme of the game, Characters, Animation, AI, Cinematic, Camera view, gameplay

# Types of Game Testing

Below are the popular game testing techniques:

### 1. Functional Testing

Functionality QA testers look for the generic problems within the game or its user interface & graphics, such as game mechanic issues, stability issues, and game asset integrity. User interface testing ensures user-friendliness of the game

Example: Checking colors and backgrounds, menu structure, screen orientation and screen resolution, font size, alignment errors, usability, system navigation such as loading time, timeout and display, sorting, confirmation messages, sequences, animations and audio elements aspects of the game, instructions, and dialogue messages. User Interactions, User Interfaces, Transactions testing, Calibration and accuracy testing of mobile phone cameras, Screen resolutions, Mobile responsive design testing, Audio quality Testing

### 2. Compatibility Testing

Checking if the game is compatible across different devices, and on different configurations of hardware and software.

Example: Install and Uninstall the game on all supported consoles/desktops/mobiles.

### 3. Performance Testing

The overall performance of the Game is checked.	Performance tuning is performed to optimize game speed.

Importance parameters checked during performance testing

- Response time on client and servers, Transaction completion time(s), Peak load performance, Longevity, network coverage, Memory leakage, low memory, low battery, Time taken to download applications, simultaneous(Multiple users) access to application’s server, speed, throughput, reliability, scalability, etc.
- Battery Consumption and graphics performance: Measure the battery consumption of the mobile game. Battery Consumption must be optimum over long hours, and game responses should be satisfactory under varying heavy loads across different devices
- Processor and memory constraints: Performance counters are used to measure the CPU and memory consumption of the application.
- Network connectivity: Measures the response time of the mobile games on different network types (Wi-Fi, 2G, 3G, 4G), It gives an overall insight into how well the game will perform on unreliable networks. It also checks connectivity between mobile devices, data centers or the cloud. The whole Peak Times, Jittery Connections, Duplication of Data, Packet loss, Fragmentation of Data are monitored.
- Testing mobile games performance especially MMO

### 4. Conformance /Compliance Testing

Marketplace guidelines compliance (e.g., Apple App Store policies), Enterprise policy compliance (e.g., prohibited content. Compliance may also refer to regulatory bodies such as PEGI and ESRB. The game targets a particular content rating. If there is an objectionable content that is inappropriate for the desired rating, then they are identified and reported. Even a single violation in submission for license approval may have the game rejected, incurring additional costs in further testing and resubmission.

Example: If the game is to be published in European countries, test for PAL conversion if the game is produced for Northern America, test for NTSC conversions.
### 5. Localization testing

Localization testing becomes essential important when a game is targeted for the global markets. Game titles, content, and texts need to be translated and tested with devices in multiple languages. These types of tests can be performed quickly (with the help of cloud-based device access and test automation).

Example: Localization needs specific to MENA region (Middle East/North Africa), Arabic localization( Right-to-Left text support, Bi-Directional displays), Pseudo-localization testing, double-byte characters (for East Asian languages), local time/date, currency, address formats, and other local requirements.
### 6. Soak testing

This game automation testing involves leaving the game running for a prolonged period in various modes of operation. For example, idling paused, or at the title screen. Soaking can identify memory leaks or rounding errors.

Example: Game has begun, and the character is made to stand idle for 24 hours. This technique is used to detect crashes brought on by memory leaks and other faults in the game engine.
7) Recovery testing

In software, recovery testing checks how well the application can be recovered from crashes, hardware failures, and other similar failures. The application is forced to fail, and later it will be observed how it recovers from the failure conditions and the environment.

Example: While a gaming application is running, suddenly restart the gaming console, & check the validate the data integrity
### 8. Security testing

It is done to check how safe the software works from external threats. Data protection from external threats, uncontrolled system access restrictions, data breach, operating system ?aws, communication system ?aws and weak encryption algorithms.

Example: Changing a URL from /login to /play on a gaming site should not allow direct access to the games.
### 9. Other Games testing

Testing of real or virtual characters. In multiplayer video games, connectivity to the server and synchronization of game status are two critical areas to be tested.

Example: Multiplayer 3D racing games.

Testing new features such as game status updates, friend invitations, premium gift sharing, etc. This ensures rich gaming experience to the user.

Example: Facebook, Blogs

Sound Testing

Testing if there is an error in loading the files, listening to sound files for errors or distortions, CC profiler to analyze the color commentary

Database and game statistics

Database verification using debugging to investigate if the game is using the data correctly. Ensure that the data is loaded in the right place and shows the correct information
White-box testing

White Box Testing for Games focuses on the architectural, integration and system aspects of the mobile game.

- <b>Code Inspection:</b> Source code is reviewed, Program logic &common programming errors, compliance with coding standards are analyzed.
- <b>Focus Testing:</b> Chunks of codes are fed to the isolated modules, and the output is analyzed.
- <b>Data Analysis:</b> Data usage, interpretation, and manipulation are analyzed and validated for the different modules.
- <b>Path and Flow Testing:</b> Correct sequence of objects are executed.
- <b>Algorithm-specific testing:</b> Testing a particular game scenario or feature by setting data variables, data values to the code and executing it in the runtime environment.
- <b>Artificial Intelligence Analysis:</b> The run statistic of the programmable moves and plays of the AI component is generated. The result is validated to check if all the programmable moves are used. Example: side grip on the snowboard and plays(combination punch/kick in multidirectional action) are used.

# Getting started with the Unity Test Framework

UTF uses a Unity integration of the NUnit library, which is an open-source unit testing library for .Net languages.

### Overview of the Test Runner API



You can run your tests programmatically from any script via the Test Runner API (see API below). It allows you to retrieve a list of tests that will run in Edit Mode, Play Mode, or both, without running them. You can hook into some register/unregister callbacks at the start and finish of each test and at each level within the testing cycle, that is, on the entire test assembly, on each individual test fixture, and on each test class and test. 

At the start of each test, you get information about the test route that is about to be run. When the test finishes, you see the test results. 

In addition to running the UTF in Play Mode in the Unity Editor, a new customization point lets you run it on target devices. This is called before you build the Player; you can modify the Player build options, for example, to change the test run settings and to specify the build locations.
```
void Execute(ExecutionSettings executionSettings);
void RegisterCallbacks<T>(T testCallbacks, int priority = 0) where T : ICallbacks;
void UnregisterCallbacks<T>(T testCallbacks) where T : ICallbacks;
void RetrieveTestList(TestMode testMode, Action<ITestAdaptor> callback);
```
### Splitting build and run

Splitting the build and run processes is useful when you want to run tests on a target device that is not attached to your local machine, for example, if it is in the cloud (or is multiple devices in the cloud). 

To do this, you first need to customize the test Player build process itself. Here’s how to do that: 

- Disable the AutoRun, so that once you build the Player it doesn’t launch and run the tests. 
- Save it to a known location rather than into the system’s temporary folder (where it would be saved by default. 

Then you add custom result reporting on the Player side (using the callback interface) to capture all the results and save them to an XML file, or whatever format works for your project. 

#### Splitting build and run: build

```
[assembly:TestPlayerBuildModifier(typeof(SetupPlaymodeTestPlayer))]
public class SetupPlaymodeTestPlayer : ITestPlayerBuildModifier {
   public BuildPlayerOptions ModifyOptions(BuildPlayerOptions playerOptions) {
   	playerOptions.options &= ~(BuildOptions.AutoRunPlayer | BuildOptions.ConnectToHost);
   	var buildLocation = Path.GetFullPath("TestPlayers");
   	var fileName = Path.GetFileName(playerOptions.locationPathName);
   	if (!string.IsNullOrEmpty(fileName))
       	buildLocation = Path.Combine(buildLocation, fileName);
   	playerOptions.locationPathName = buildLocation;
   	return playerOptions;
   }
}
```

#### Splitting build and run: save results in run
```
[assembly:TestRunCallback(typeof(ResultSerializer))]
public class ResultSerializer : ITestRunCallback {
   public void RunStarted(ITest testsToRun) { }
   public void TestStarted(ITest test) { }
   public void TestFinished(ITestResult result) { }
   public void RunFinished(ITestResult testResults) {     
   	var path = Path.Combine(Application.persistentDataPath, "testresults.xml");
   	using (var xw = XmlWriter.Create(path, new XmlWriterSettings{Indent = true}))
       	testResults.ToXml(true).WriteTo(xw);
   	System.Console.WriteLine($"***\n\nTEST RESULTS WRITTEN TO\n\n\t{path}\n\n***");
   	Application.Quit(testResults.FailCount > 0 ? 1 : 0);
   }
}
```
### Launching specific tests from a menu item
Often, when developers write validations, the results are displayed in the Console window, where it’s easy for them to be lost in the flow of messages. What if you could instead get validation results in a test suite with clear indicators in a dedicated place in the Editor? You can do this by launching specific tests for a menu item.  

You start with a method that’s wired up to a MenuItem, exactly the same way as you would do with any other Editor extension menu item. That method then creates a ScriptableObject callback object. You use a ScriptableObject instead of a regular class so that the tests can do things such as cause a domain reload while keeping your callbacks intact. When the ScriptableObject is enabled, it is registered for callbacks, and when it’s disabled, it is unregistered. 

Then you set up filters. Often, when you launch a test for a MenuItem, you want to run tests for a specific category or group. With filters you can execute the test run asynchronously. It will run over the course of several frames, allowing you to have UnityTest, UnitySetUp, and UnityTearDown tick the engine loop during the test. When the test is finished and registers RunFinished, you can set it to display a message or open a results window – whatever makes sense for your workflow.
```
public class RunTestsFromMenu : ScriptableObject, ICallbacks {
   [MenuItem(“Tools/Run useful tests”)] public static void DoRunTests() {
   	CreateInstance<RunTestsFromMenu>().StartTestRun();
   }
   private void StartTestRun() {
   	hideFlags = HideFlags.HideAndDontSave;
   	CreateInstance<TestRunnerApi>().Execute(new ExecutionSettings {
       	filters = new [] { new Filter{ categoryNames = new[] { “UsefulTests” }}}
   	});
   }
   public void OnEnable() { CreateInstance<TestRunnerApi>().RegisterCallbacks(this); }
   public void OnDisable() { CreateInstance<TestRunnerApi>().UnregisterCallbacks(this); }
   /* ...RunStarted, TestStarted, TestFinished... */
   public void RunFinished(ITestResultAdaptor result) {       
   	…
   	DestroyImmediate(this);
   }
```
### Running tests before the build

Running tests before the build can be tricky because the build process requires that the tests are run from a callback, so there’s no opportunity to pump the engine update loop. But the benefit is that you can check that basic functionality is working, prior to spending time actually building (which can take many minutes for some projects). 

You can implement this application using the IPreprocessBuildWithReport interface, the same way you might implement any other kind of build preprocessing. To get the results, register a callback as usual.

Because you can’t go into Play Mode in the middle of a build, you can use the Test Runner API to run specific tests in Edit Mode. You can select those tests by filtering by category, such as a pre-build validation test category. You can run these tests synchronously. 

Once the test is finished, check the results. If something failed, you can throw a BuildFailed exception, which will cause the build process to abort. 

```
    public ITestResultAdaptor Result { get; private set; }     
    public void RunStarted(ITestAdaptor testsToRun) { }
    public void TestStarted(ITestAdaptor test) { }
    public void TestFinished(ITestResultAdaptor result) { }
    public void RunFinished(ITestResultAdaptor result)
    {
        Result = result;
    }
}
```