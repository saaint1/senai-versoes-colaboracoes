import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class PageHome {
	private WebDriver driver;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", System.getnv("Driver"));
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		drvier.get("http://localhost:4200/");
	}

@Test
public void acessarSite() {
	driver.findElement(By.className("login-page")).click();
	driver.findElement(By.className('navbar-brand')).click();
	driver.findElements(By.className("banner")).click();
}

	@After
	public void fechar() {
		driver.close();
	}
}
